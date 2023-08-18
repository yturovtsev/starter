import React from 'react';
import Head from 'next/head';
import { LandingEditorContainer } from '@/components/LandingEditor';

const LandingEditor = () => {
  return (
    <>
      <Head>
        <title>Landing Editor</title>
      </Head>
      <LandingEditorContainer />
    </>
  );
};

export default LandingEditor;
