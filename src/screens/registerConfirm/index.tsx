import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles  } from './styles';
import { theme } from '../../global/styles/theme';
import Cadastro_Confirmado from '../../assets/Cadastro_Confirmado.png';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ButtonWhite } from '../../components/ButtonWhite';

export function RegisterConfirm(){
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate('SignIn');
    }
    return  (
        <View style={styles.container}>
            <Image
                source={logoSmall}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                
                <Image
                    source={Cadastro_Confirmado}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <Text style={styles.title}>
                    Seu perfil foi criado com sucesso!!
                </Text>
                <Text style={styles.label}>
                    Realize o login com as credencias inseridas nos 
                </Text>


            </View>
            <View style={styles.controlsbutons}>
                <Button
                    title="Logar"
                    onPress={handleNavigate}
                />
            </View>
        </View>
    )
}