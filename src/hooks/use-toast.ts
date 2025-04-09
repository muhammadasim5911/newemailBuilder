import { useState, useEffect, useCallback } from "react"
import { nanoid } from "nanoid"

export interface ToastProps {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  type?: "default" | "success" | "error" | "warning"
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

type ToasterToast = ToastProps & {
  id: string
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

function genId() {
  return nanoid()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      // Dismiss all toasts if no id is provided
      if (toastId === undefined) {
        return {
          ...state,
          toasts: state.toasts.map((t) => ({
            ...t,
            dismissed: true,
          })),
        }
      }

      // Dismiss toast with specific id
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId ? { ...t, dismissed: true } : t
        ),
      }
    }

    case actionTypes.REMOVE_TOAST: {
      const { toastId } = action

      // Remove all toasts if no id is provided
      if (toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }

      // Remove toast with specific id
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== toastId),
      }
    }
  }
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })

  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      title: props.title,
      description: props.description,
      type: props.type || "default",
    },
  })

  // Auto-dismiss toast after 5000ms
  const timeoutId = setTimeout(() => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })
    // And remove it after dismiss animation (300ms)
    setTimeout(() => {
      dispatch({ type: actionTypes.REMOVE_TOAST, toastId: id })
    }, 300)
  }, 5000)

  toastTimeouts.set(id, timeoutId)

  return {
    id,
    update,
    dismiss,
  }
}

export function useToast() {
  const [state, setState] = useState<State>(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  const dismiss = useCallback((toastId?: string) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId })
    // Clear timeout if toast is dismissed manually
    if (toastId && toastTimeouts.has(toastId)) {
      clearTimeout(toastTimeouts.get(toastId))
      toastTimeouts.delete(toastId)
    }
  }, [])

  const dismissAll = useCallback(() => {
    dispatch({ type: actionTypes.DISMISS_TOAST })
    // Clear all timeouts if toasts are dismissed manually
    toastTimeouts.forEach((timeout) => clearTimeout(timeout))
    toastTimeouts.clear()
  }, [])

  return {
    ...state,
    toast,
    dismiss,
    dismissAll,
  }
}

export default useToast