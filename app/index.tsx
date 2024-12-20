import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Feather } from '@expo/vector-icons';
import AvailableBalanceContainer from "@/components/AvailableBalanceContainer";
import Advertisement from "@/components/AdvertisementBox";
import Section from "@/components/Section";
import ThemedButton from "@/components/ThemedButton";
import ProductCard from "@/components/ProductCard";
import { List } from "react-native-paper";
import ThemedAccordion, { ThemedListItem } from "@/components/ThemedAcordion";
import { Link, router } from "expo-router";
import useProducts from "@/hooks/useProducts";
import { useEffect } from "react";

export default function Index() {

  const {products, getProducts} = useProducts({})

  useEffect(() => {
    getProducts({
      search: ''
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Section>
        <View>
          <Link style={styles.search} href="/products">
              <Feather style={styles.searchIcon} name="search" size={24} color="black" />
              <ThemedText darkColor='#222' type="defaultSemiBold" > ¿Qué necesitas comprar?</ThemedText>
          </Link>
        </View>
      </Section>
      <Section>
        <AvailableBalanceContainer />
      </Section>
      <Section>
        <View style={styles.advertisementContainer}>
          <Advertisement onPress={()=> {router.navigate('/products')}}/>
        </View>
      </Section>
      <Section>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Destacados</ThemedText>
          <ThemedButton onPress={()=> {router.navigate('/products')}} title="Ver más" type="primary" />
        </View>
        <ScrollView horizontal>
          {
            products.map((product: any) => (
              <View style={{ margin: 12, marginBottom: 18, flexShrink: 10, width: 300 }} key={product.id}>
                <ProductCard bordered product={product} />
              </View>
            ))
          }
        </ScrollView>
      </Section>
      <Section>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Preguntas frecuentes</ThemedText>
        </View>
        <List.Section>
          <ThemedAccordion title='¿Cómo funciona?'>
            <ThemedListItem title='Somos una compañía tecnológica que en alianza con su red de tiendas, te permite comprar tus productos y poder pagarlo en cómodas cuotas.'/>
          </ThemedAccordion>
          <ThemedAccordion title='¿Donde puedo aplicar para comprar?'>
            <ThemedListItem title='Puedes aplicar desde la comodidad de tu casa descargando la app de la tienda. También puedes aplicar desde cualquiera de nuestras tiendas aliadas.'/>
          </ThemedAccordion>
          <ThemedAccordion title='¿Cúanto debo pagar de abono inicial?'>
            <ThemedListItem title='El abono inicial requerido es del 40% al 60% del precio de la compra, dependiendo de tu nivel.'/>
          </ThemedAccordion>
          <ThemedAccordion title='¿Cada cúanto tiempo debo pagar mis cuotas?'>
            <ThemedListItem title='Las cuotas deben pagarse de manera quincenal.'/>
          </ThemedAccordion>
        </ List.Section>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 15
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10
  },
  searchIcon: {
    marginRight: 10
  },
  advertisementContainer: {
    marginTop: 20,
    marginHorizontal: 15
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
