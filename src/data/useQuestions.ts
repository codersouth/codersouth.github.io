import { useQuery } from 'react-query'
import { get, onValue, ref, set, DataSnapshot } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { db } from './firebase'

enum QA {
  key = 'questions',
  path = 'questions/',
}

type Question = {
  readonly user?: string | null
  readonly date: number
  readonly question: string
}

type QuestionWithId = Question & {
  readonly id: string
}

const mapDataToQuestions = (
  snapshot: DataSnapshot,
): readonly QuestionWithId[] =>
  Object.entries(snapshot.val())
    .map(([id, val]: readonly unknown[]) => ({
      user: (val as QuestionWithId).user,
      question: (val as QuestionWithId).question,
      date: (val as QuestionWithId).date,
      id: id as string,
    }))
    .sort((a, b) => (a.date > b.date ? 1 : -1))

export const setQuestion = (question: Question) => {
  return set(ref(db, `${QA.path}${uuidv4()}`), question)
}

export const getQuestions = (): Promise<DataSnapshot> => get(ref(db, QA.path))

export const onQuestion = (cb: (snap: readonly QuestionWithId[]) => void) => {
  onValue(ref(db, QA.path), (snapshot) => {
    if (!snapshot.val()) {
      return []
    }

    return cb(mapDataToQuestions(snapshot))
  })
}

export type { Question, QuestionWithId }

export const useQuestions = () => {
  const { data: questions, refetch } = useQuery<readonly QuestionWithId[]>(
    QA.key,
    async () => {
      const docs = await getQuestions()

      return mapDataToQuestions(docs)
    },
  )

  const makeQuestion = (question: Question) => setQuestion(question)
  useEffect(() => {
    onQuestion(() => refetch())
  }, [refetch])

  return {
    questions: questions ?? [],
    makeQuestion,
  }
}
