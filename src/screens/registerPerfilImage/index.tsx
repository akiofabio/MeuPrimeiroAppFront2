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
import ImagemPerfil from '../../assets/ImagemPerfil.png';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ButtonWhite } from '../../components/ButtonWhite';

export function RegisterPerfilImage(){
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate('RegisterConfirm');
    }
    return  (
        <View style={styles.container}>
            <Image
                source={logoSmall}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Para finalizar, insira uma foto de perfil
                </Text>
                <Image
                    source={ImagemPerfil}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <Text style={styles.label}>
                    selecionar foto de perfil 
                </Text>


            </View>
            <View style={styles.controlsbutons}>
                <View style={styles.buton}>
                    <Button
                        title="Pular essa etapa"
                        onPress={handleNavigate}
                    />
                </View>
                <View style={styles.buton}>
                    <Button
                        title="Continuar"
                        onPress={handleNavigate}
                    />
                </View>
            </View>
        </View>
    )
}