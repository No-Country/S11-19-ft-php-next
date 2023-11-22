import { create } from 'zustand'
import { reminderType } from './models'

// type CartStore = {
//     reminder: reminderType | null,
//     selectReminder: () => void,
//     /* remove: () => void,
//     removeAll: () => void */
// }

type State = {
  reminder: reminderType | null

}

type Action = {
  selectReminder: (reminder: State['reminder']) => void

}

export const useReminderStore = create<State & Action>((set) => ({
    reminder: null,
    selectReminder: (reminder) => set(() => ({ reminder: reminder })),
}));
