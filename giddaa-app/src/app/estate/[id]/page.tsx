import Link from "next/link";
import { usePathname } from "next/navigation";

const EstatePage = ({ params }: { params: { id: string } }) => {
    const pathname = usePathname();

    return (
        <div>
            <nav>
                <Link href={`/estate/${params.id}/details`} className={pathname.includes("details") ? "active" : ""}>Details</Link>
                <Link href={`/estate/${params.id}/properties`} className={pathname.includes("properties") ? "active" : ""}>Properties</Link>
                <Link href={`/estate/${params.id}/allocation`} className={pathname.includes("allocation") ? "active" : ""}>Allocation</Link>
            </nav>
        </div>
    );
};

export default EstatePage;

