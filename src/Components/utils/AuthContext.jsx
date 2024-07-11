import { React, useContext, useState, useEffect, createContext, useRef } from 'react'
import { account } from '../../Appwrite/config';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const ref = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        chekUserStatus();
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true);
        try {
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get();
            setUser(accountDetails);

            console.log('Session: ', response)
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    }
    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(null)
    }
    const registerUser = async(userInfo) => {
        setLoading(true);
        try{
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password,
                userInfo.name
            );

            await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails);
            

        }catch(error){
            console.error(error)
        }
        setLoading(false);
    }
    const chekUserStatus = async () => {

        try {
            let accountDetails = await account.get();
            setUser(accountDetails);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);

    }
    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {
                loading ? <div>
                    <LoadingBar color='#f11946' ref={ref} />
                    <button onClick={() => ref.current.continuousStart()}>
                        Start Continuous Loading Bar
                    </button>
                    <button onClick={() => ref.current.staticStart()}>
                        Start Static Loading Bar
                    </button>
                    <button onClick={() => ref.current.complete()}>Complete</button>
                    <br />
                </div> : children
            }
        </AuthContext.Provider>
    )
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext