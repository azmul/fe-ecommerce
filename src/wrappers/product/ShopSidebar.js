import PropTypes from "prop-types";
import React, {useEffect} from "react";
import ShopCategories from "../../components/product/ShopCategories";
import ShopTag from "../../components/product/ShopTag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/actions/commonActions";

const ShopSidebar = ({ getSortParams, sideSpaceClass }) => {
  const dispatch = useDispatch();

  const uniqueCategories = useSelector((state) => state.commonData.categories);
  const uniqueTags = useSelector((state) => state.commonData.tags);

  useEffect(() => {
    dispatch(fetchTags());
  },[dispatch])

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}

      {/* filter by categories */}
      {uniqueCategories && uniqueCategories.length > 0 && <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />}
      

      {/* filter by tag */}
      {uniqueTags && uniqueTags.length > 0 && 
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> }
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
