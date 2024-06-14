interface Props {
    title: string
    description: string
}

function Title({ title, description }: Props) {
    return (
        <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>

            <h1 className="md:text-5xl text-4xl text-gray-300 font-bold capitalize">{description}</h1>
        </div>
    )
}

export default Title
