import { login, signup } from './actions';

export default function LoginPage() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 animate-gradient-x'>
            <div className='max-w-sm w-full py-8 px-4 bg-white rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold mb-6 text-center'>ログイン</h1>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email:</label>
                        <input id="email" name="email" type="email" required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password:</label>
                        <input id="password" name="password" type="password" required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
                    </div>
                    <div className='flex justify-between'>
                        <button type="submit" formAction={login} className='py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'>Log in</button>
                        <button type="submit" formAction={signup} className='py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
