import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href="/" className='flex gap-2 glex-cetner'>
                <Image
                    src="/assets/images/icon.png"
                    alt="CustomFeeds Logo"
                    width={50}
                    height={50}
                    className='object-contain'
                />
                <p className='logo_text'>CustomFeedGuy</p>
            </Link>
            <div className='flex gap-3 md:gap-5'>
                        <Link href="/past-newsletters" className='black_btn'>
                            Past Newsletters
                        </Link>
            </div>
        </nav>
    )
}

export default Nav;

/*
Removed login for the time being. Restructuring the website for my own purposes as a blog.


'use client';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


Above return:
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    }, [])



In the return block:


            { /* Desktop Naviagtion }
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href="/create-feed" className='black_btn'>
                            Create Feed
                        </Link>
                        <button type="button" onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>

                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile' />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}
            </div>

            { /* Mobile Navigation }
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown(prev => !prev)}
                        />

                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href="/profile" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href="/create-feed" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    Create Feed
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signout;
                                    }}
                                    className='mt-5 w-full black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}
            </div>
*/