import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserGroups,
  addFavoriteGroup,
  removeFavoriteGroup,
  fetchGroupsList,
  joinGroup,
  createGroup,
} from "../actions/groupActions"; // Import joinGroup
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  FormGroup,
  Label,
  Form,
  ModalBody,
  Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import NavigationBar from "../components/NavigationBar";
import "./css/GroupListScreen.css";
=======
<<<<<<< HEAD
import NavigationBar from "../components/NavigationBar";
import "./css/GroupListScreen.css";
=======
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d

const GroupListScreen = () => {
  const dispatch = useDispatch();

  const userGroups = useSelector((state) => state.userGroups);
  const { loading, error, favorite_groups, created_groups, joined_groups } =
    userGroups;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
  const allGroups = useSelector((state) => state.groupsList);
  const { groups = [], loading: groupsLoading } = allGroups;

  const [favorites, setFavorites] = useState({});
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [modalCreate, setModalCreate] = useState(false); // Create Group Modal State
  const [groupName, setGroupName] = useState("");
  const [groupImage, setGroupImage] = useState(null);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
  // Fetch user groups on component mount
  useEffect(() => {
    dispatch(fetchUserGroups());
  }, [dispatch]);

  // Set favorites based on favorite groups
  useEffect(() => {
    if (favorite_groups) {
      const favoriteMap = favorite_groups.reduce((acc, group) => {
        acc[group.group_tag] = true;
        return acc;
      }, {});
      setFavorites(favoriteMap);
    }
  }, [favorite_groups]);

  // Handle favorite toggle for groups
  const handleFavoriteToggle = (group) => {
    const isFavorite = favorites[group.group_tag];
    const updatedFavorites = { ...favorites }; // Create a new object to avoid mutation

    if (isFavorite) {
      dispatch(removeFavoriteGroup(group.group_tag));
      delete updatedFavorites[group.group_tag]; // Remove from favorites map
    } else {
      dispatch(addFavoriteGroup(group.group_tag));
      updatedFavorites[group.group_tag] = true; // Add to favorites map
    }

    setFavorites(updatedFavorites);
  };

  // Render star icon based on favorites
  const renderStarIcon = (group) => {
    return favorites[group.group_tag] ? solidStar : regularStar;
  };

  // Sort groups with favorites first
  const sortedGroups = (groups) => {
    return [...groups].sort((a, b) => {
      const isAFavorite = favorites[a.group_tag] ? 1 : 0;
      const isBFavorite = favorites[b.group_tag] ? 1 : 0;
      return isBFavorite - isAFavorite; // Sort favorites first
    });
  };

  // Toggle modal for joining groups and fetch groups only when opening
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      dispatch(fetchGroupsList()); // Fetch groups when opening the modal
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter groups based on search term and exclude joined groups
  const filteredGroups = groups.filter(
    (group) =>
      !joined_groups.some(
        (joinedGroup) => joinedGroup.group_tag === group.group_tag
      ) &&
      !created_groups.some(
        (createdGroup) => createdGroup.group_tag === group.group_tag
<<<<<<< HEAD
      ) && // Exclude joined groups
=======
<<<<<<< HEAD
      ) && // Exclude joined groups
=======
      )&& // Exclude joined groups
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
      (group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.group_tag.toLowerCase().includes(searchTerm.toLowerCase())) // Search by name or tag
  );

  const toggleCreateModal = () => setModalCreate(!modalCreate);
  const handleImageUpload = (e) => {
    setGroupImage(e.target.files[0]);
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
  // Handle Create Group form submission
  const handleCreateGroup = () => {
    const formData = new FormData();
    formData.append("name", groupName); // Append group name
<<<<<<< HEAD
    if (groupImage) {
      formData.append("group_image", groupImage); // Append uploaded image
    }
=======
<<<<<<< HEAD
    if (groupImage) {
      formData.append("group_image", groupImage); // Append uploaded image
    }
=======
    formData.append("group_image", groupImage); // Append uploaded image
    window.location.reload();
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d

    dispatch(createGroup(formData)); // Dispatch createGroup action
    toggleCreateModal(); // Close modal after submission
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
    <>
      <div className="grouplistpage">
        <NavigationBar />
        <div className="grouplistcontainer">
          {loading && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}

          <div className="button-container">
            <button className="thebutton" onClick={toggleModal}>
              Join Group
            </button>
            <button className="thebutton" onClick={toggleCreateModal}>
              +
            </button>
          </div>

          {/* Container for Created Groups */}
          <div className="created-groups-container">
            <h2>Created Groups</h2>
            <Row>
              {sortedGroups(created_groups).map((group, index) => (
                <Col key={`${group.group_tag}-${index}`} sm="6" md="4" lg="3">
                  <Card className="mb-4 card">
                    {" "}
                    {/* Apply card class */}
<<<<<<< HEAD
=======
=======
    <div className="container mt-4">
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <Button color="primary" onClick={toggleModal}>
        Join Group
      </Button>
      <Button color="primary" onClick={toggleCreateModal}>
        Create Group
      </Button>

      <h2>Created Groups</h2>
      <Row>
        {sortedGroups(created_groups).map((group, index) => (
          <Col key={`${group.group_tag}-${index}`} sm="6" md="4" lg="3">
            <Link
              to={`/groups/${group.group_tag}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="mb-4">
                <CardImg
                  top
                  width="100%"
                  src={group.group_image}
                  alt={group.name}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {group.name}
                    <Button
                      color="link"
                      onClick={() => handleFavoriteToggle(group)}
                    >
                      <FontAwesomeIcon icon={renderStarIcon(group)} size="lg" />
                    </Button>
                  </CardTitle>
                  <CardText>{group.group_tag}</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <h2>Joined Groups</h2>
      <Row>
        {sortedGroups(joined_groups).map((group, index) => (
          <Col key={`${group.group_tag}-${index}`} sm="6" md="4" lg="3">
            <Link
              to={`/groups/${group.group_tag}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="mb-4">
                <CardImg
                  top
                  width="100%"
                  src={group.group_image}
                  alt={group.name}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {group.name}
                    <Button
                      color="link"
                      onClick={() => handleFavoriteToggle(group)}
                    >
                      <FontAwesomeIcon icon={renderStarIcon(group)} size="lg" />
                    </Button>
                  </CardTitle>
                  <CardText>{group.group_tag}</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      {/* Join Group Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Join a Group</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Search for a group..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Row className="mt-3">
            {groupsLoading ? (
              <h4>Loading Groups...</h4>
            ) : (
              filteredGroups.map((group, index) => (
                <Col key={`${group.group_tag}-${index}`} sm="6" md="4" lg="3">
                  <Card className="mb-4">
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
                    <CardImg
                      top
                      width="100%"
                      src={group.group_image}
                      alt={group.name}
                    />
                    <CardBody>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
                      <CardTitle tag="h5" className="card-title">
                        {" "}
                        {/* Apply card-title class */}
                        <Link
                          to={`/groups/${group.group_tag}`}
                          style={{
                            textDecoration: "underline",
                            color: "inherit",
                          }}
                        >
                          {group.name}
                        </Link>
                        <Button
                          color="link"
                          onClick={(event) => {
                            event.stopPropagation(); // Prevents the link from triggering
                            handleFavoriteToggle(group); // Toggle favorite state
                          }}
                        >
                          <FontAwesomeIcon
                            icon={renderStarIcon(group)}
                            size="lg"
                          />
                        </Button>
                      </CardTitle>
                      <CardText className="card-text">
                        {group.group_tag}
                      </CardText>{" "}
                      {/* Apply card-text class */}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Container for Joined Groups */}
          <div className="joined-groups-container">
            <h2>Joined Groups</h2>
            <Row>
              {sortedGroups(joined_groups).map((group, index) => (
                <Col key={`${group.group_tag}-${index}`} sm="6" md="4" lg="3">
                  <Link to={`/groups/${group.group_tag}`}>
                    <Card>
                      <CardImg top src={group.group_image} alt={group.name} />
                      <CardBody>
                        <CardTitle tag="h5">
                          {group.name}
                          <button
                            className="link-button" // You can style this if you need to
                            onClick={() => handleFavoriteToggle(group)}
                          >
                            <FontAwesomeIcon
                              icon={renderStarIcon(group)}
                              size="lg"
                            />
                          </button>
                        </CardTitle>
                        <CardText>{group.group_tag}</CardText>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>

          {/* Join Group Modal */}
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Join a Group</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                placeholder="Search for a group..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
<<<<<<< HEAD
              <Row>
=======
              <Row className="mt-3">
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
                {groupsLoading ? (
                  <h4>Loading Groups...</h4>
                ) : (
                  filteredGroups.map((group, index) => (
<<<<<<< HEAD
                    <Col key={`${group.group_tag}-${index}`}>
                      <Card className="modal-card">
=======
                    <Col
                      key={`${group.group_tag}-${index}`}
                      sm="6"
                      md="4"
                      lg="3"
                    >
                      <Card>
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
                        <CardImg
                          top
                          width="100%"
                          src={group.group_image}
                          alt={group.name}
<<<<<<< HEAD
                          style={{ objectFit: "cover", height: "150px" }} // Adjust image height
                        />
                        <CardBody className="d-flex flex-column">
                          <CardTitle tag="h5" className="flex-grow-1">
                            {group.name}
                          </CardTitle>
=======
                        />
                        <CardBody>
                          <CardTitle tag="h5">{group.name}</CardTitle>
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
                          <button
                            className="thebutton"
                            onClick={() => {
                              dispatch(joinGroup(group.group_tag)); // Dispatch the joinGroup action
                              toggleModal(); // Close the modal after joining
                            }}
                          >
                            Join
                          </button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </ModalBody>
          </Modal>

          {/* Create Group Modal */}
          <Modal isOpen={modalCreate} toggle={toggleCreateModal}>
            <ModalHeader toggle={toggleCreateModal}>
              Create New Group
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="groupName">Group Name</Label>
                  <Input
                    type="text"
                    id="groupName"
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)} // Set group name
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="groupImage">Upload Group Image</Label>
                  <Input
                    type="file"
                    id="groupImage"
                    onChange={handleImageUpload} // Handle image upload
                  />
                </FormGroup>

                <button className="thebutton" onClick={handleCreateGroup}>
                  Create
                </button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
<<<<<<< HEAD
=======
=======
                      <CardTitle tag="h5">{group.name}</CardTitle>
                      <Button
                        color="primary"
                        onClick={() => {
                          dispatch(joinGroup(group.group_tag)); // Dispatch the joinGroup action
                          toggleModal(); // Close the modal after joining
                        }}
                      >
                        Join
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </ModalBody>
      </Modal>
      <Modal isOpen={modalCreate} toggle={toggleCreateModal}>
        <ModalHeader toggle={toggleCreateModal}>Create New Group</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="groupName">Group Name</Label>
              <Input
                type="text"
                id="groupName"
                placeholder="Enter group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)} // Set group name
              />
            </FormGroup>

            <FormGroup>
              <Label for="groupImage">Upload Group Image</Label>
              <Input
                type="file"
                id="groupImage"
                onChange={handleImageUpload} // Handle image upload
              />
            </FormGroup>

            <Button color="primary" onClick={handleCreateGroup}>
              Create
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
  );
};

export default GroupListScreen;
