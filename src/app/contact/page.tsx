import React from 'react'

const Page = () => {
  return (
    <div className="mt-8 md:px-40">
    <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Name:</span> Your Company Name
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Address:</span> 123 Main Street, City, Country
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> info@example.com
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/company/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:underline"
            >
              GitHub
            </a>
          </div>
          </div>
      <div className='bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">Have questions or feedback? Reach out to us!</p>

      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-500 rounded"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-500 rounded"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-500 rounded"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
      </div>
    
    </div>
  </div>
  )
}

export default Page
