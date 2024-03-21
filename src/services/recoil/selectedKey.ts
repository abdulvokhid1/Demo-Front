import { atom } from 'recoil'
// import { anonymousAvatar } from '../../../public/images'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const navSelectedKey = atom<number>({
    key: 'nav-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const generalSelectedKey = atom<number>({
    key: 'general-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export const userSelectedKey = atom<number>({
    key: 'user-key',
    default: 0,
    effects_UNSTABLE: [persistAtom],
})