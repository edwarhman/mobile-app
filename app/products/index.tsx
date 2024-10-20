import ProductsListContainer from "@/components/ProductsListContainer";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import SearchBar from "@/components/SearchBar";
import useProducts from "@/hooks/useProducts";
import BackButton from "@/components/BackButton";
import { ActivityIndicator } from "react-native-paper";
import { ThemedText } from "@/components/ThemedText";

export default function ProductsPage() {
  const { products, getProducts, isLoading } = useProducts({
    itemsPerPage: 25
  });

  return (
    <ThemedView style={styles.container}>
      <View style={styles.head}>
        <BackButton />
        <View style={styles.searchBar}>
          <SearchBar onSearch={getProducts} />
        </View>
      </View>
      {isLoading ? <ActivityIndicator style={{
        marginTop: 100,
        alignItems: 'center',
      }} size={150} /> 
      : products.length > 0 ? <ProductsListContainer numColumns={2} products={products} />
      : <View style={{
        marginTop: 100,
        alignItems: 'center',
      }}>
          <ThemedText>No products found</ThemedText>
        </View>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    margin: 12,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flexGrow: 1,
  },
  backwardIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
