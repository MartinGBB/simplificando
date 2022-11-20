import { HomeContainer } from "./styles";
import { Loading } from "../../components/Loading";

export function Home() {
  const isLoading = false

  if (isLoading) return <Loading />

  return (
    <HomeContainer>
      <h1>Home</h1>
    </HomeContainer>
  )
}
