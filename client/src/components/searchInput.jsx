import React, { useState } from 'react';
import '../App.css';
import SearchBox from './searchBox';

export default function App() {
  const [model, setModel] = useState('curie');
  const [replies, setReplies] = useState([]);
  const addReply = async () => {
    await setReplies([{ model, text: '' }, ...replies]);
  };

  return (
    <div className='App'>
      <main>
        <section id='enginesSection' className='bg-b pad rnd'>
          <div className='wrap'>
            <label className='c-bg'>Message bot</label>
            <div className='d-flex'>
              <SearchBox setModel={setModel} model={model} />

              <button
                className='b-0 bg-0 b-l-b text-start pad pointer'
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  addReply();
                }}
              >
                Ask
              </button>
            </div>
          </div>
        </section>
        <section className='prompt pad'></section>
        {replies && replies.length > 0 && (
          <section className='bg-r rnd pad c-bg'>
            {replies.map((reply, i) => {
              let shaveFront = reply.text.split('\n');
              let text = shaveFront.slice(2, shaveFront.length);
              return (
                <React.Fragment key={i}>
                  <h3 className='italic mt-1'>
                    {replies.length - i}: {reply.prompt}
                  </h3>

                  <div className='ai-reply pad'>
                    {text.map((r, j) => (!r ? <br /> : <p key={j}>{r}</p>))}
                  </div>
                  <h5 style={{ textAlign: 'right' }}>– {reply.model}</h5>
                </React.Fragment>
              );
            })}
          </section>
        )}
      </main>
      {/* <footer className='bg-g'></footer> */}
    </div>
  );
}
