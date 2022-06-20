import AuthStack from "./Routes/AuthStack"
import NoAuthstack from "./Routes/NoAuthstack"
import { auth, firestore } from "../config/firebase"
import { setUserAction, resetAction } from "../redux/modules/user/actions"
import { useDispatch, useSelector } from "react-redux"
import { View, ActivityIndicator } from "react-native"
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { doc, onSnapshot } from "firebase/firestore"




export default function Routes(){
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let unsubscribeAuth = onAuthStateChanged(auth, async authenticatedUser => {
            try {
                if (authenticatedUser) {
                    let docRef = doc(firestore, "users", authenticatedUser.uid);
                    onSnapshot(docRef, (doc) => {
                        if (doc.exists) {
                            dispatch(setUserAction({ logged: true, ...authenticatedUser, ...doc.data() }))
                        } else {
                            console.log("No such document!");
                        }
                    });
                } else {
                    dispatch(resetAction())
                }
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        })

        return unsubscribeAuth
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        user.logged ? <AuthStack /> : <NoAuthstack />
    )
}