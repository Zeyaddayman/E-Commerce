import TagCard from "../_components/TagCard"
import { ITag } from "../_interfaces"

export default async function Home() {

    const res = await fetch("http://localhost:3000/api/tags", {
        cache: "no-store"
    })
    const tags: ITag[] = await res.json()

    return (
        <main className="p-10 md:p-16 mx-auto">
            <div className="flex flex-wrap gap-5 justify-center">
                {tags.map((tag, i) => (
                    <TagCard key={i} tag={tag} />
                ))}
            </div>
        </main>
    )
}