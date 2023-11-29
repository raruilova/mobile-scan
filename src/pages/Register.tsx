import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                Test
            </IonContent>
            <IonFooter>
                <IonToolbar>asd</IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Register;