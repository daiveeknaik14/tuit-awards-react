import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as dislikesService from "../../services/dislikes-service";
import * as awardsService from "../../services/awards-service";
import Tuit from "../tuits/tuit";
import Award from "./award";


const Awards = ({awards = [], refreshawards}) => {
    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    awards.map && awards.map(award =>
                        <Award key={award._id}
                              award={award}/>)
                }
            </ul>
        </div>
    );
}

export default Awards;