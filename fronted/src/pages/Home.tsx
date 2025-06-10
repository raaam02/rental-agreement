import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="text-center py-20 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Rentify</h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Quickly generate legally formatted rental agreements for free. No login required.
      </p>
      <Button asChild size="lg">
        <Link to="/create">Create Your Agreement</Link>
      </Button>
    </section>
  )
}

export default Home
