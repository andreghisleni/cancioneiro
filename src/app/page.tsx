import Video from 'next-video';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <h1>Teste</h1>
      <div className='w-1/2'>
        <Video
          src="https://test-videos.andreg.com.br/dança sonia.mp4"
        />
      </div>
    </main>
  );
}
