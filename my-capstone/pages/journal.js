import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
//import prisma from '/lib/prisma';
//import { useSession, signIn, signOut, getSession } from "next-auth/react";


export default function Journal() {
  return (
    <Layout>
        <title> Journal - {siteTitle}</title>
        <br />
      <div>
        <Form>this is a form</Form>
      </div>
         </Layout>
  );

}



function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
      <div id="accordion-open" data-accordion="open">
  <h2 id="accordion-open-heading-1">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg> New Workout</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Laruen ipsum yadda yadda fancy placeholder latin here</p>
<form action="/api/form" method="post">
  <label for="first">Sets </label>
  <input type="text" id="first" name="first" />
</form>
<form className='w-32' action="/api/form" method="post">
  <label for="last">Reps </label>
  <input type="text" id="last" name="last" />
  <button type="cancel" >Cancel </button>
  <button type="submit"> Save</button>
</form>
   
    </div>
  </div>
  <h2 id="accordion-open-heading-2">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>Chest Workout</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Test. Stuff goes here</p>
    </div>
    </div>
  </div>
  <h2 id="accordion-open-heading-3">
    <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span class="flex items-center"><svg class="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>Lower-body Workout</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Test number 3</p>
    </div>
  </div>
</div>


  )
}