import CollectionDetails from "../../components/CollectionDetails/CollectionDetails";
import CollectionPhotos from "../../components/CollectionPhotos/CollectionPhotos";
import Wrapper from "../../components/Wrapper/Wrapper";

const CollectionPage = () => (
	<>
		<CollectionDetails />
		<Wrapper>
			<CollectionPhotos />
		</Wrapper>
	</>
);

export default CollectionPage;
