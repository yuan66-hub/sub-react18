import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


export const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!window.__MICRO_WEB__) {
  render()
}

export async function bootstrap() {
  console.log('react18 bootstrap')
}

export async function mount(app) {
  window.custom.on('test2',(data)=>{
     console.log('vue3===',data);
  })
  window.custom.emit('test1',{
     data:'react18消息'
  })
  console.log('react18 mount')
  render()
}


export async function unmount(ctx) {
  console.log('react18 unmout')
  // container=>#micro-container
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}

