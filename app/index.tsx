import ProductsListContainer from "@/components/ProductsListContainer";
import { StyleSheet } from "react-native";
import { products } from '../db/products.json';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>HOME PAGE</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1
  },
});