import { HomeLayout } from '../../components/layouts/HomeLayout.tsx';

function Home() {
  const name = process.env.REACT_APP_MY_NAME;

  return (
    <HomeLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="p-8 rounded-lg text-center">
          <div className='flex justify-center'>
            <img
              src="profile.jpg"
              alt="Profile Picture"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>

          <div className='absolute -rotate-12 top-[60px] right-[220px]'>
            <div className='bg-white w-fit px-3 py-2 rounded-2xl up-down-animation'>
              <h2 className="text-sm font-medium">{name} 👋🏼</h2>
            </div>
          </div>
            
            
            
          <p className="mt-6 font-montserrat text-2xl font-semibold w-72 small-caps">
            Crafting innovative software solutions with a passion for code and creativity.
          </p>
          <a
            href="#"
            className="mt-8 inline-block px-6 py-2 text-white bg-black rounded-full hover:bg-blue-600 transition"
          >
            Projects 
          </a>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
