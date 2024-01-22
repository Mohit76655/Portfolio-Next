import React from "react";

const Contact = () => {
  return (
    <section class="bg-white dark:bg-transparent">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="font-bold text-5xl md:text-8xl text-neutral-500 text-center">
          Let's Talk
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          I will read all emails. Send me any message you want and I'll get back
          to you. but you won't receive anything other than your reply.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="interview ?"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Lets Talk..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-neutral-800 sm:w-fit hover:bg-neutral-900 focus:ring-4 focus:outline-none"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
