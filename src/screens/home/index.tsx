import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { styles  } from './styles';
import promocao from '../../assets/Grupo417.png';
import ShoppingCart from '../../assets/Grupo1127.png';
import note from '../../assets/540d7697864354f0c0bed1741209d7f1.png';
import hardware from '../../assets/61DYLoyNRWL._AC_SX679_.png';
import periferico from '../../assets/61hAn48vroL._AC_SX522_.png';
//import logoSmall from '../../assets/LogoSmall.png';
import { ButtonWhite } from '../../components/ButtonWhite';
import { Menu } from '../../components/Menu';
import { Background } from '../../components/Background';
import React from 'react';


export function Home() {
  return (
      <ScrollView style={styles.container}>    
        <View style={styles.controls}> 
          <Text style={styles.title}>
            Home
          </Text>
          <Image
            style={styles.imageShoppingCart} 
            source={ShoppingCart} 
            resizeMode="stretch"
          />
        </View>

        <Image 
            source={promocao}
            style={styles.imageBaner}
            resizeMode="stretch"
        />
        <View style={styles.content}>
          <View style={styles.controls}> 
            <Text style={styles.subtitle}>
              NoteBoocks
            </Text>
            <Text style={styles.text}>
              ver tudo
            </Text>
          </View>          
        </View>
          <ScrollView  horizontal={true} style={styles.controlsProduto} showsHorizontalScrollIndicator={false}>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
          </ScrollView>

          <View style={styles.content}>
            <View style={styles.controls}> 
              <Text style={styles.subtitle}>
                Computadores
              </Text>
              <Text style={styles.text}>
                ver tudo
              </Text>
            </View>          
          </View>
          <ScrollView  horizontal={true} style={styles.controlsProduto} showsHorizontalScrollIndicator={false}>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={note}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
          </ScrollView>
          <View style={styles.content}>
            <View style={styles.controls}> 
              <Text style={styles.subtitle}>
                Hardwares
              </Text>
              <Text style={styles.text}>
                ver tudo
              </Text>
            </View>          
          </View>
          <ScrollView  horizontal={true} style={styles.controlsProduto} showsHorizontalScrollIndicator={false}>
            <View style={styles.produtoView}>
              <Image 
                  source={hardware}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={hardware}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={hardware}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
          </ScrollView>

          <View style={styles.content}>
            <View style={styles.controls}> 
              <Text style={styles.subtitle}>
                Perifiricos
              </Text>
              <Text style={styles.text}>
                ver tudo
              </Text>
            </View>          
          </View>
          <ScrollView  horizontal={true} style={styles.controlsProduto} showsHorizontalScrollIndicator={false}>
            <View style={styles.produtoView}>
              <Image 
                  source={periferico}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={periferico}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
            <View style={styles.produtoView}>
              <Image 
                  source={periferico}
                  style={styles.imageProduto}
                  resizeMode="stretch"
              />
              <Text style={styles.text}>
                MacBook Air de 13
              </Text>
              <Text style={styles.text}>
                Loja Sistech Eletronicos
              </Text>
              <Text style={styles.text}>
                R$ 7.999,99
              </Text>
            </View>
          </ScrollView>
          <View>
            
          </View>
          <Menu/>
      </ScrollView>
  );
}