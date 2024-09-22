import CompaniesLogos from "./components/companieslogo";
import RightStack from "./components/RightStack";
import LeftStack from "./components/LeftStack";



export default function Home() {
  return (
    <>
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Mindset Studios</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        For all of your professional media & music recording needs.
        </p>
      </div>
    </div>
            <CompaniesLogos/>
            <LeftStack
             title="Media"
             description="Mindset Studios delivers creative media services, including custom copyright-free soundtracks, professional videography, and photography. They offer content scheduling and social media analysis to boost engagement and audience growth. With competitive pricing and a strategic approach, they ensure your brand stands out."
             imageUrl="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            />
            <RightStack/>
            <LeftStack
             title="Events"
             description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
             iste dolor cupiditate blanditiis ratione."
             imageUrl="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            />
            </>
  )
}
