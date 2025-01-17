import React from 'react';
import Head from 'next/head'

import QuestionAskView from '../../components/question-ask-view'
import Header from '../../components/layout/header'
import QuestionForm from '../../components/question-ask-view/question-form'

const Ask = () => {
  return (
    <div>
      <Head>
        <title>Ask3d.me - A new way to solve your questions!</title>
      </Head>

      <Header />
      <QuestionAskView>
        <QuestionForm />
      </QuestionAskView>
    </div>
  )
}

export default Ask
