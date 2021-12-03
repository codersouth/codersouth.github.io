// Import the functions you need from the SDKs you need
import { v4 as uuidv4 } from 'uuid'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAuIoRIQDFc68FAoPsTSVLyndVvAAM2qTo',
  authDomain: 'codersouth-rtc.firebaseapp.com',
  projectId: 'codersouth-rtc',
  storageBucket: 'codersouth-rtc.appspot.com',
  messagingSenderId: '208542950495',
  appId: '1:208542950495:web:c674aeb1944e23cb3967ea',
  measurementId: 'G-926R3L32MN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

enum QA {
  path = 'questions/',
}

type Question = {
  readonly name: string
  readonly question: string
}

type QuestionWithId = {
  readonly name: string
  readonly question: string
  readonly id: string
}

export const setQuestion = (question: Question) => {
  return set(ref(db, `${QA.path}${uuidv4()}`), question)
}

export const onQuestion = (cb: (snap: readonly QuestionWithId[]) => void) => {
  onValue(ref(db, QA.path), (snapshot) => {
    if (!snapshot.val()) {
      return []
    }

    return cb(
      Object.entries(snapshot.val()).map(([id, val]: readonly unknown[]) => ({
        name: (val as QuestionWithId).name,
        question: (val as QuestionWithId).question,
        id: id as string,
      })),
    )
  })
}

export type { Question, QuestionWithId }
