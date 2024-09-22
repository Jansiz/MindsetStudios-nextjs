import Image from "next/image"



type ExampleProps = {
    title: string;
    description: string;
    imageUrl: string;
  }
  


export default function LeftStack({ title, description, imageUrl }: ExampleProps) {
    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
            <Image
      src="/images/insert_photo_here.jpg"
      width={2432}
      height={1442}
      alt="insert photo here"
      className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
    />
            </div>
          </div>
        </div>
      </div>
    )
  }