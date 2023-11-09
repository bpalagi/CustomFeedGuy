const NewsletterForm = ({ emailInput, setEmailInput, submitting, handleSubscribe }) => {
  return (
    <section className='feed'>
      <form
        onSubmit={handleSubscribe}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Join my newsletter
              </span>

              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder='Enter your email'
                required
                className='form_input' 
              />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
              <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                {submitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
        </form>
    </section>
  )
}

export default NewsletterForm