

import { useState } from "react"

const CreateSoil = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    imagePreview: "",
    area: "",
    crops: "",
    minerals: "",
  })

  // State for list of soils
  const [soils, setSoils] = useState([])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Create new soil object
    const newSoil = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      image: formData.imagePreview,
      area: formData.area,
      crops: formData.crops,
      minerals: formData.minerals,
    }

    // Add to soils list
    setSoils([...soils, newSoil])

    // Reset form
    setFormData({
      name: "",
      description: "",
      image: null,
      imagePreview: "",
      area: "",
      crops: "",
      minerals: "",
    })

    // Close modal
    setIsModalOpen(false)
  }

  // Modal styles
  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: isModalOpen ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "white",
      borderRadius: "8px",
      width: "90%",
      maxWidth: "500px",
      maxHeight: "400px",
      overflowY: "auto",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      minHeight: "100px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    soilList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },
    soilCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    soilImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "4px",
      marginBottom: "10px",
    },
    soilInfo: {
      marginBottom: "5px",
    },
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Create Soil</h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button style={modalStyles.button} onClick={() => setIsModalOpen(true)}>
          Create Soil
        </button>
      </div>

      {/* Modal/Popup */}
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
          <h2 style={{ marginBottom: "20px" }}>Add New Soil</h2>

          <form onSubmit={handleSubmit}>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Soil Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={modalStyles.input}
                required
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={modalStyles.textarea}
                required
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Image Upload</label>
              <input type="file" accept="image/*" onChange={handleImageChange} style={modalStyles.input} required />
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  style={{ width: "100%", maxHeight: "150px", objectFit: "cover", marginTop: "10px" }}
                />
              )}
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Area Found in India</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                style={modalStyles.input}
                required
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Best Suitable Crops</label>
              <input
                type="text"
                name="crops"
                value={formData.crops}
                onChange={handleChange}
                style={modalStyles.input}
                required
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Available Minerals</label>
              <input
                type="text"
                name="minerals"
                value={formData.minerals}
                onChange={handleChange}
                style={modalStyles.input}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button
                type="button"
                style={{ ...modalStyles.button, backgroundColor: "#f44336" }}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" style={modalStyles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Soil List */}
      <div style={modalStyles.soilList}>
        {soils.map((soil) => (
          <div key={soil.id} style={modalStyles.soilCard}>
            <img src={soil.image || "/placeholder.svg"} alt={soil.name} style={modalStyles.soilImage} />
            <h3 style={modalStyles.soilInfo}>{soil.name}</h3>
            <p style={modalStyles.soilInfo}>
              <strong>Description:</strong> {soil.description}
            </p>
            <p style={modalStyles.soilInfo}>
              <strong>Area Found:</strong> {soil.area}
            </p>
            <p style={modalStyles.soilInfo}>
              <strong>Best Crops:</strong> {soil.crops}
            </p>
            <p style={modalStyles.soilInfo}>
              <strong>Minerals:</strong> {soil.minerals}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreateSoil
