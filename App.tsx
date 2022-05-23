import {NativeBaseProvider} from 'native-base'
import { Signin } from './src/screens/Signin';

export default function App() {
  return (
    <NativeBaseProvider>
     <Signin/>
    </NativeBaseProvider>
  );
}