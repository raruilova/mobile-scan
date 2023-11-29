import { BarcodeScanner, Barcode } from '@capacitor-mlkit/barcode-scanning';
import { IonAlert, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

const ScanQr: React.FC = () => {
    const [isSupported, setIsSupported] = useState(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const [showAlert, setShowAlert] = useState(false);


    const startScan =async () => {
        const result = await BarcodeScanner.isSupported();
        console.log(result.supported);
        
        
    }

    console.log(barcodes);
    
    


    useEffect(() => {
        startScan();
    }, []);
    const scan = async () => {
        const granted = await requestPermissions();
        if (!granted) {
          setShowAlert(true);
          return;
        }
    
        const { barcodes: scannedBarcodes } = await BarcodeScanner.scan();
        setBarcodes((prevBarcodes) => [...prevBarcodes, ...scannedBarcodes]);
      };
    
      const requestPermissions = async (): Promise<boolean> => {
        const { camera } = await BarcodeScanner.requestPermissions();
        return camera === 'granted' || camera === 'limited';
      };

    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Qr Scanner</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color={"primary"} onClick={scan}>Scan</IonButton>
            <IonAlert 
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header='Permission denied'
            message="Please grant camera permission to use the barcode scanner."
            buttons={['OK']}
            />
            </IonContent>
        </IonPage>
    );
};

export default ScanQr;