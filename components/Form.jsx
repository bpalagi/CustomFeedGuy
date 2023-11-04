import Link from 'next/link';

const Form = ({ type, feed, setFeed, submitting, handleSubmit }) => {
  return (
      <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
          <span className='blue_gradient'>
            {type} Feed
          </span>
        </h1>
        <p className='desc text-left max-w-md'>
          {type} a feed with ultimate control. Audit your online useage like your finances, and take control. 
          If you&apos;re spending this much time online already, make it productive and meaningful. It&apos;s incredibly
          easy to learn while enjoying time online! Just need to curate your feed.
        </p>

        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Your Feed
              </span>

              <textarea
                value={feed.feed}
                onChange={(e) => setFeed({ ...feed, feed: e.target.value})}
                placeholder='Curate your Feed here...'
                required
                className='form_textarea' />
            </label>

            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Tag {` `}
                <span className='font-normal'>
                  (ex: entrepreneurship)
                </span>
              </span>

              <input
                value={feed.tag}
                onChange={(e) => setFeed({ ...feed, tag: e.target.value})}
                placeholder='#tag'
                required
                className='form_input' 
              />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
              <Link href='/' className='text-gray-500 text-sm'>
                Cancel
              </Link>

              <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                {submitting ? `${type}...` : type}
              </button>
            </div>
        </form>
      </section>
    )
}

export default Form