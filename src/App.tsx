import Nav from "./components/Nav";
import {
    Hero,
    PopularProduct,
    SuperQuality,
    CustomerReviews,
    Footer,
    Subscribe,
    SpecialOffer,
    Services,
} from "./sections/index";
function App() {
    return (
        <main className="relative">
            <Nav />
            <section className="padding">
                <Hero />
            </section>
            <section className="padding">
                <PopularProduct />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x bg-black padding-t pb-8">
                <Footer />
            </section>
        </main>
    );
}

export default App;
