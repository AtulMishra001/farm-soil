

import { useState } from "react"
import { Pencil, Trash2, Plus } from "lucide-react"

const SoilDashboard = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State to track if we're editing or creating
  const [isEditing, setIsEditing] = useState(false)

  // State for current soil being edited (if any)
  const [currentSoilId, setCurrentSoilId] = useState(null)

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    characteristics: "",
    image: null,
    imagePreview: "",
    region: "",
    crops: "",
    minerals: "",
  })

  // Initial sample soils data
  const [soils, setSoils] = useState([
    {
      id: 1,
      name: "Alluvial Soil",
      characteristics: "Fertile, light-colored, high in minerals, found in river plains",
      image: "/rich-earth.png",
      region: "Indo-Gangetic Plains",
      crops: "Rice, Wheat, Sugar...",
      minerals: "Potash, Phosphoric Acid",
    },
    {
      id: 2,
      name: "Black Soil",
      characteristics: "Rich in clay, retains moisture, self-ploughing during summer",
      image: "/rich-earth.png",
      region: "Deccan Plateau",
      crops: "Cotton, Sugarcane...",
      minerals: "Iron, Magnesium, Aluminum",
    },
    {
      id: 3,
      name: "Red Soil",
      characteristics: "Red color due to iron oxide, porous, low fertility",
      image: "/iron-rich-earth.png",
      region: "Eastern and Southern Plateaus",
      crops: "Groundnut, Potato...",
      minerals: "Iron Oxide, Potash",
    },
    {
      id: 4,
      name: "Laterite Soil",
      characteristics: "Acidic, poor in organic matter, rich in iron and aluminum",
      image: "/laterite-texture.png",
      region: "Western Ghats, Eastern Ghats",
      crops: "Tea, Coffee, Rubber...",
      minerals: "Iron Oxide, Aluminum",
    },
    {
      id: 5,
      name: "Desert Soil",
      characteristics: "Sandy texture, low organic matter, high salt content",
      image: "/arid-earth.png",
      region: "Rajasthan, Gujarat",
      crops: "Millet, Barley, Maize...",
      minerals: "Phosphate, Nitrate",
    },
  ])

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

  // Open modal for creating new soil
  const openCreateModal = () => {
    setIsEditing(false)
    setCurrentSoilId(null)
    setFormData({
      name: "",
      characteristics: "",
      image: null,
      imagePreview: "",
      region: "",
      crops: "",
      minerals: "",
    })
    setIsModalOpen(true)
  }

  // Open modal for editing existing soil
  const openEditModal = (soil) => {
    setIsEditing(true)
    setCurrentSoilId(soil.id)
    setFormData({
      name: soil.name,
      characteristics: soil.characteristics,
      image: null,
      imagePreview: soil.image,
      region: soil.region,
      crops: soil.crops,
      minerals: soil.minerals,
    })
    setIsModalOpen(true)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      // Update existing soil
      setSoils(
        soils.map((soil) =>
          soil.id === currentSoilId
            ? {
                ...soil,
                name: formData.name,
                characteristics: formData.characteristics,
                image: formData.imagePreview || soil.image,
                region: formData.region,
                crops: formData.crops,
                minerals: formData.minerals,
              }
            : soil,
        ),
      )
    } else {
      // Create new soil
      const newSoil = {
        id: Date.now(),
        name: formData.name,
        characteristics: formData.characteristics,
        image: formData.imagePreview || "/placeholder.svg?height=80&width=80&query=soil",
        region: formData.region,
        crops: formData.crops,
        minerals: formData.minerals,
      }
      setSoils([...soils, newSoil])
    }

    // Reset form and close modal
    setIsModalOpen(false)
  }

  // Handle soil deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this soil type?")) {
      setSoils(soils.filter((soil) => soil.id !== id))
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>Soil Details</h1>
        <button
          onClick={openCreateModal}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          <Plus size={18} />
          Add Soil Type
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
          padding: "24px",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>Soil Types</h2>
          <p style={{ color: "#6b7280", margin: "4px 0 0 0" }}>Manage soil types and their characteristics</p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Image</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Soil Type</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Characteristics</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Suitable Crops</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Region</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: "500" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {soils.map((soil) => (
                <tr key={soil.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "12px 16px" }}>
                    <img
                      src={soil.image || "/placeholder.svg"}
                      alt={soil.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        border: "1px solid #e5e7eb",
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px", fontWeight: "500" }}>{soil.name}</td>
                  <td style={{ padding: "12px 16px", maxWidth: "300px" }}>{soil.characteristics}</td>
                  <td style={{ padding: "12px 16px" }}>{soil.crops}</td>
                  <td style={{ padding: "12px 16px" }}>{soil.region}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <button
                        onClick={() => openEditModal(soil)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#4b5563",
                        }}
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(soil.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#4b5563",
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "500px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "24px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "20px" }}>{isEditing ? "Edit Soil Type" : "Add Soil Type"}</h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Soil Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Characteristics</label>
                <textarea
                  name="characteristics"
                  value={formData.characteristics}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                    minHeight: "100px",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Image Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                  }}
                />
                {formData.imagePreview && (
                  <img
                    src={formData.imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginTop: "10px",
                      borderRadius: "4px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                )}
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Region</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Suitable Crops</label>
                <input
                  type="text"
                  name="crops"
                  value={formData.crops}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Available Minerals</label>
                <input
                  type="text"
                  name="minerals"
                  value={formData.minerals}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                  }}
                  required
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "24px" }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#16a34a",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {isEditing ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SoilDashboard
