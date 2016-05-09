import { ref } from 'config/constants'
import { authUser, fetchingUserSuccess } from 'redux/modules/users'
import { formatUserInfo } from 'helpers/utils'

export default function auth () {
  return ref.authWithOAuthPopup('facebook')
}

export function checkIfAuthed (store) {
  const authData = ref.getAuth()
  if (authData === null) {
    return false
  } else if (store.getState().users.isAuthed === false) {
    const { facebook, uid } = authData
    const userInfo = formatUserInfo(facebook.displayName, facebook.profileImageURL, uid)
    store.dispatch(authUser(uid))
    store.dispatch(fetchingUserSuccess(uid, userInfo, Date.now()))
  }
  return true
}

export function logout () {
  ref.unauth()
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
