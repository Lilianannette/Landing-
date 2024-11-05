import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../assets/index.css'

export default function Selection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <section className='flex h-screen flex-col justify-center bg-black'>
        <AnimatePresence>
          {!selectedImage ? (
            <div className='flex flex-col justify-center'>
              <motion.div
                className="flex h-32 w-full flex-col items-center justify-center bg-[url('/2.jpg')]"
                onClick={() => handleSelect('/2.jpg')}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
              >
                <a href="#">
                  <h1 className='text-6xl font-bold italic text-pink'>Temple</h1>
                </a>
              </motion.div>
              <motion.div
                className="flex h-32 w-full flex-col items-center justify-center bg-[url('/13.jpg')]"
                onClick={() => handleSelect('/13.jpg')}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                
              >
                <a href="#">
                  <h1 className='text-6xl font-bold italic text-pink'>Sanctuaire</h1>
                </a>
              </motion.div>
            </div>
          ) : (
            <motion.div
              className="h-screen w-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedImage})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-9xl font-bold text-pink">
                {selectedImage === '/2.jpg' ? '神殿 ' : '社'}
              </h1>
              <button
                onClick={() => setSelectedImage(null)}
              >
                Retour
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
