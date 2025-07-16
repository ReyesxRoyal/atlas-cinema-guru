import FavoritesDisplay from "@/app/components/favoritesDisplay";
import FilmDisplay from "@/app/components/filmDisplay";
import FilmImage from "@/app/components/filmImage";
import SearchField from "@/app/components/searchField";
import { fetchGenres } from "@/lib/data";

export default async function Page(props: {
    searchParams?: Promise<{
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const currentPage = searchParams?.page || "1";

    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
            <FavoritesDisplay page={currentPage} />
        </div>
    );
}
