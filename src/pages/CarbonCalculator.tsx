import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Breadcrumb,
  Nav,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHeader from "@/components/common/PageHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface EmissionInput {
  energy: {
    electricity: number; // kWh
    naturalGas: number; // kWh
    heating: number; // kWh
  };
  transport: {
    carPetrol: number; // miles
    carDiesel: number; // miles
    carElectric: number; // miles
    train: number; // miles
    bus: number; // miles
    flight: number; // miles
  };
  waste: {
    landfill: number; // tonnes
    recycling: number; // tonnes
    compost: number; // tonnes
  };
}

interface EmissionResults {
  total: number;
  breakdown: {
    energy: number;
    transport: number;
    waste: number;
  };
  scopes: {
    scope1: number; // Direct emissions
    scope2: number; // Purchased electricity
    scope3: number; // Other indirect emissions
  };
  scopeDetails: {
    scope1: { naturalGas: number; heating: number; ownedVehicles: number };
    scope2: { electricity: number };
    scope3: {
      publicTransport: number;
      flights: number;
      waste: number;
      electricVehicles: number;
    };
  };
}

const CarbonCalculator: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("energy");
  const [transportUnit, setTransportUnit] = useState<"km" | "miles">("km");
  const [inputs, setInputs] = useState<EmissionInput>({
    energy: { electricity: 0, naturalGas: 0, heating: 0 },
    transport: {
      carPetrol: 0,
      carDiesel: 0,
      carElectric: 0,
      train: 0,
      bus: 0,
      flight: 0,
    },
    waste: { landfill: 0, recycling: 0, compost: 0 },
  });
  const [results, setResults] = useState<EmissionResults>({
    total: 0,
    breakdown: { energy: 0, transport: 0, waste: 0 },
    scopes: { scope1: 0, scope2: 0, scope3: 0 },
    scopeDetails: {
      scope1: { naturalGas: 0, heating: 0, ownedVehicles: 0 },
      scope2: { electricity: 0 },
      scope3: {
        publicTransport: 0,
        flights: 0,
        waste: 0,
        electricVehicles: 0,
      },
    },
  });

  // Handle unit toggle with value conversion
  const handleUnitToggle = (newUnit: "km" | "miles") => {
    if (newUnit === transportUnit) return;

    const conversionFactor = newUnit === "miles" ? 0.621371 : 1.60934;

    setInputs((prev) => ({
      ...prev,
      transport: {
        carPetrol: prev.transport.carPetrol
          ? Math.round(prev.transport.carPetrol * conversionFactor * 100) / 100
          : 0,
        carDiesel: prev.transport.carDiesel
          ? Math.round(prev.transport.carDiesel * conversionFactor * 100) / 100
          : 0,
        carElectric: prev.transport.carElectric
          ? Math.round(prev.transport.carElectric * conversionFactor * 100) /
            100
          : 0,
        train: prev.transport.train
          ? Math.round(prev.transport.train * conversionFactor * 100) / 100
          : 0,
        bus: prev.transport.bus
          ? Math.round(prev.transport.bus * conversionFactor * 100) / 100
          : 0,
        flight: prev.transport.flight
          ? Math.round(prev.transport.flight * conversionFactor * 100) / 100
          : 0,
      },
    }));

    setTransportUnit(newUnit);
  };

  // Handle reset - clear all inputs
  const handleReset = () => {
    setInputs({
      energy: { electricity: 0, naturalGas: 0, heating: 0 },
      transport: {
        carPetrol: 0,
        carDiesel: 0,
        carElectric: 0,
        train: 0,
        bus: 0,
        flight: 0,
      },
      waste: { landfill: 0, recycling: 0, compost: 0 },
    });
    setTransportUnit("km");
    setActiveTab("energy");
  };

  // UK GHG 2025 Conversion Factors (kg CO2e per unit)
  const conversionFactors = {
    energy: {
      electricity: 0.177, // kg CO2e per kWh (UK grid average)
      naturalGas: 0.18296, // kg CO2e per kWh
      heating: 0.24677, // kg CO2e per kWh (heating oil)
    },
    transport: {
      carPetrol: 0.16267, // kg CO2e per km (average petrol car) - converted from 0.26187 per mile
      carDiesel: 0.17303, // kg CO2e per km (average diesel car) - converted from 0.27849 per mile
      carElectric: 0.03662, // kg CO2e per km (UK electric car) - converted from 0.05894 per mile
      train: 0.05894, // kg CO2e per km (national rail)
      bus: 0.10385, // kg CO2e per km (local bus)
      flight: 0.22928, // kg CO2e per km (domestic flight)
    },
    waste: {
      landfill: 497.24244, // kg CO2e per tonne
      recycling: 4.68568, // kg CO2e per tonne
      compost: 8.98311, // kg CO2e per tonne
    },
  };

  // Calculate emissions whenever inputs change
  useEffect(() => {
    // Category-based calculations
    const energyEmissions =
      inputs.energy.electricity * conversionFactors.energy.electricity +
      inputs.energy.naturalGas * conversionFactors.energy.naturalGas +
      inputs.energy.heating * conversionFactors.energy.heating;

    // Convert miles to km for all transport if user selected miles
    const transportMultiplier = transportUnit === "miles" ? 1.60934 : 1;

    const transportEmissions =
      inputs.transport.carPetrol *
        transportMultiplier *
        conversionFactors.transport.carPetrol +
      inputs.transport.carDiesel *
        transportMultiplier *
        conversionFactors.transport.carDiesel +
      inputs.transport.carElectric *
        transportMultiplier *
        conversionFactors.transport.carElectric +
      inputs.transport.train *
        transportMultiplier *
        conversionFactors.transport.train +
      inputs.transport.bus *
        transportMultiplier *
        conversionFactors.transport.bus +
      inputs.transport.flight *
        transportMultiplier *
        conversionFactors.transport.flight;

    const wasteEmissions =
      inputs.waste.landfill * conversionFactors.waste.landfill +
      inputs.waste.recycling * conversionFactors.waste.recycling +
      inputs.waste.compost * conversionFactors.waste.compost;

    // Scope 1: Direct emissions from owned/controlled sources
    const scope1NaturalGas =
      inputs.energy.naturalGas * conversionFactors.energy.naturalGas;
    const scope1Heating =
      inputs.energy.heating * conversionFactors.energy.heating;
    const scope1OwnedVehicles =
      inputs.transport.carPetrol * conversionFactors.transport.carPetrol +
      inputs.transport.carDiesel * conversionFactors.transport.carDiesel;

    const scope1Total = scope1NaturalGas + scope1Heating + scope1OwnedVehicles;

    // Scope 2: Indirect emissions from purchased electricity
    const scope2Electricity =
      inputs.energy.electricity * conversionFactors.energy.electricity;
    const scope2Total = scope2Electricity;

    // Scope 3: All other indirect emissions
    const scope3PublicTransport =
      inputs.transport.train * conversionFactors.transport.train +
      inputs.transport.bus * conversionFactors.transport.bus;
    const scope3Flights =
      inputs.transport.flight * conversionFactors.transport.flight;
    const scope3ElectricVehicles =
      inputs.transport.carElectric * conversionFactors.transport.carElectric;
    const scope3Waste = wasteEmissions;

    const scope3Total =
      scope3PublicTransport +
      scope3Flights +
      scope3ElectricVehicles +
      scope3Waste;

    const totalEmissions = scope1Total + scope2Total + scope3Total;

    setResults({
      total: totalEmissions,
      breakdown: {
        energy: energyEmissions,
        transport: transportEmissions,
        waste: wasteEmissions,
      },
      scopes: {
        scope1: scope1Total,
        scope2: scope2Total,
        scope3: scope3Total,
      },
      scopeDetails: {
        scope1: {
          naturalGas: scope1NaturalGas,
          heating: scope1Heating,
          ownedVehicles: scope1OwnedVehicles,
        },
        scope2: {
          electricity: scope2Electricity,
        },
        scope3: {
          publicTransport: scope3PublicTransport,
          flights: scope3Flights,
          waste: scope3Waste,
          electricVehicles: scope3ElectricVehicles,
        },
      },
    });
  }, [inputs]);

  const handleInputChange = (
    category: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [category]: {
        ...(prev as any)[category],
        [name]: parseFloat(value) || 0,
      },
    }));
  };

  const [activeTab, setActiveTab] = useState<string>("energy");
  useScrollToTop();

  return (
    <div className="carbon-calculator-page">
      <SEO
        title="Carbon Emissions Calculator - UK GHG Standards"
        description="Calculate your carbon footprint using official UK Government GHG conversion factors for 2025. Track Scope 1, 2, and 3 emissions."
        keywords="carbon calculator, emissions calculator, GHG protocol, UK carbon footprint, scope 1 2 3 emissions"
      />

      <PageHeader
        title="Carbon Emission Calculator"
        subtitle="Calculate your carbon footprint using official UK Government GHG conversion factors"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Carbon Calculator", path: "/carbon-calculator" },
        ]}
        showLogos={false}
      />

      <Container fluid className="calculator-content py-4">
        <Row className="g-4">
          <Col lg={7} xl={7} className="mb-4 mb-lg-0">
            <Card className="calculator-card">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <Nav variant="pills" className="category-tabs flex-grow-1">
                    <Nav.Item>
                      <Nav.Link
                        active={activeTab === "energy"}
                        onClick={() => setActiveTab("energy")}
                      >
                        ⚡ Energy
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        active={activeTab === "transport"}
                        onClick={() => setActiveTab("transport")}
                      >
                        🚗 Transport
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        active={activeTab === "waste"}
                        onClick={() => setActiveTab("waste")}
                      >
                        ♻️ Waste
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Button size="sm" onClick={handleReset} className="reset-btn">
                    🔄 Reset
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                {activeTab === "energy" && (
                  <div className="category-section energy-section">
                    <h4 className="section-title mb-4">Energy Consumption</h4>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Electricity (kWh/month)
                        <span className="text-muted ms-2">
                          Grid electricity usage
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="electricity"
                        value={inputs.energy.electricity || ""}
                        onChange={(e) => handleInputChange("energy", e)}
                        placeholder="e.g., 350"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Natural Gas (kWh/month)
                        <span className="text-muted ms-2">For heating</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="naturalGas"
                        value={inputs.energy.naturalGas || ""}
                        onChange={(e) => handleInputChange("energy", e)}
                        placeholder="e.g., 500"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Heating Oil (liters/month)
                        <span className="text-muted ms-2">
                          Alternative heating
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="heating"
                        value={inputs.energy.heating || ""}
                        onChange={(e) => handleInputChange("energy", e)}
                        placeholder="e.g., 100"
                        min="0"
                      />
                    </Form.Group>

                    <div className="category-tip mt-4">
                      <div className="tip-icon">💡</div>
                      <div className="tip-content">
                        <strong>Quick Tip:</strong> The average UK household
                        uses about 350 kWh of electricity and 500 kWh of gas per
                        month. Switching to renewable energy tariffs can
                        significantly reduce your Scope 2 emissions.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "transport" && (
                  <div className="category-section transport-section">
                    <h4 className="section-title mb-4">Transportation</h4>

                    <div className="mb-4 p-3 bg-light rounded">
                      <Form.Label className="d-block mb-2 fw-semibold">
                        Distance Unit for All Transport
                      </Form.Label>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Distance unit selector"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="unitToggle"
                          id="unitKm"
                          autoComplete="off"
                          checked={transportUnit === "km"}
                          onChange={() => handleUnitToggle("km")}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="unitKm"
                        >
                          Kilometers (km)
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="unitToggle"
                          id="unitMiles"
                          autoComplete="off"
                          checked={transportUnit === "miles"}
                          onChange={() => handleUnitToggle("miles")}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="unitMiles"
                        >
                          Miles
                        </label>
                      </div>
                      <Form.Text className="text-muted d-block mt-2">
                        Select your preferred unit for all transport distances
                        (cars, trains, buses, flights).
                      </Form.Text>
                    </div>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Car - Petrol ({transportUnit}/month)
                        <span className="text-muted ms-2">
                          Personal vehicle
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="carPetrol"
                        value={inputs.transport.carPetrol || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 400"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Car - Diesel ({transportUnit}/month)
                        <span className="text-muted ms-2">
                          Personal vehicle
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="carDiesel"
                        value={inputs.transport.carDiesel || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 400"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Car - Electric ({transportUnit}/month)
                        <span className="text-muted ms-2">Battery EV</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="carElectric"
                        value={inputs.transport.carElectric || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 400"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Train ({transportUnit}/month)
                        <span className="text-muted ms-2">Rail travel</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="train"
                        value={inputs.transport.train || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 100"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Bus ({transportUnit}/month)
                        <span className="text-muted ms-2">Local bus</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="bus"
                        value={inputs.transport.bus || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 50"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Flights ({transportUnit}/month)
                        <span className="text-muted ms-2">Air travel</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="flight"
                        value={inputs.transport.flight || ""}
                        onChange={(e) => handleInputChange("transport", e)}
                        placeholder="e.g., 200"
                        min="0"
                      />
                    </Form.Group>

                    <div className="category-tip mt-4">
                      <div className="tip-icon">🚲</div>
                      <div className="tip-content">
                        <strong>Did you know?</strong> Electric vehicles produce
                        about 70% fewer emissions than petrol cars, while trains
                        and buses are even more efficient per passenger mile.
                        Consider carpooling or public transport for regular
                        commutes.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "waste" && (
                  <div className="category-section waste-section">
                    <h4 className="section-title mb-4">Waste Management</h4>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Landfill Waste (kg/month)
                        <span className="text-muted ms-2">
                          General waste bin
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="landfill"
                        value={inputs.waste.landfill || ""}
                        onChange={(e) => handleInputChange("waste", e)}
                        placeholder="e.g., 50"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Recycling (kg/month)
                        <span className="text-muted ms-2">
                          Recyclable materials
                        </span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="recycling"
                        value={inputs.waste.recycling || ""}
                        onChange={(e) => handleInputChange("waste", e)}
                        placeholder="e.g., 30"
                        min="0"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        Compost (kg/month)
                        <span className="text-muted ms-2">Organic waste</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="compost"
                        value={inputs.waste.compost || ""}
                        onChange={(e) => handleInputChange("waste", e)}
                        placeholder="e.g., 20"
                        min="0"
                      />
                    </Form.Group>

                    <div className="category-tip mt-4">
                      <div className="tip-icon">♻️</div>
                      <div className="tip-content">
                        <strong>Reduce Impact:</strong> Recycling actually
                        reduces emissions compared to landfill! Composting
                        organic waste cuts methane emissions. Aim to reduce
                        landfill waste and increase recycling and composting.
                      </div>
                    </div>
                  </div>
                )}

                {/* Tips Section - Fills the empty space */}
                <div className="calculator-tips mt-4 pt-4">
                  <h5 className="tips-title mb-3">
                    <span className="tips-icon">💡</span>
                    Quick Tips to Reduce Your Footprint
                  </h5>
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="mini-tip-item">
                        <span className="mini-tip-icon">⚡</span>
                        <div>
                          <strong>Renewable Energy</strong>
                          <p className="small mb-0">
                            Switch to green tariffs to cut Scope 2 emissions
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mini-tip-item">
                        <span className="mini-tip-icon">🚲</span>
                        <div>
                          <strong>Public Transport</strong>
                          <p className="small mb-0">
                            Trains and buses emit less per passenger
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mini-tip-item">
                        <span className="mini-tip-icon">♻️</span>
                        <div>
                          <strong>Reduce & Recycle</strong>
                          <p className="small mb-0">
                            Minimize landfill to cut Scope 3 emissions
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mini-tip-item">
                        <span className="mini-tip-icon">🏠</span>
                        <div>
                          <strong>Home Efficiency</strong>
                          <p className="small mb-0">
                            Better insulation reduces energy use
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* UK Context Card */}
                <Card className="mt-4 info-card">
                  <Card.Body>
                    <h5 className="mb-3">🇬🇧 UK Context</h5>
                    <div className="uk-context-stats">
                      <div className="context-stat mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="stat-label">
                            UK Average per person:
                          </span>
                          <span className="stat-value">6,000 kg CO₂e/year</span>
                        </div>
                        <div className="progress mt-2 progress-thin">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={6000}
                            aria-valuemin={0}
                            aria-valuemax={6000}
                          ></div>
                        </div>
                      </div>
                      <div className="context-stat">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="stat-label">
                            Paris Agreement Target (2030):
                          </span>
                          <span className="stat-value text-success">
                            2,300 kg CO₂e/year
                          </span>
                        </div>
                        <div className="progress mt-2 progress-thin">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "38%" }}
                            aria-valuenow={2300}
                            aria-valuemin={0}
                            aria-valuemax={6000}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {results.total > 0 && (
                      <div className="mt-3 pt-3 border-top">
                        <p className="small mb-2">
                          <strong>Your monthly footprint:</strong>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="stat-label">
                            {results.total > 500
                              ? "⚠️ Above"
                              : results.total > 192
                              ? "📊 Near"
                              : "✅ Below"}{" "}
                            UK average
                          </span>
                          <span
                            className={`stat-value ${
                              results.total > 500
                                ? "text-danger"
                                : results.total > 192
                                ? "text-warning"
                                : "text-success"
                            }`}
                          >
                            {((results.total / 500) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5} xl={5}>
            <div className="results-sticky">
              <Card className="results-card mb-3">
                <Card.Body>
                  <div className="total-emissions mb-4">
                    <h3 className="total-label">Total Emissions</h3>
                    <div className="total-value">
                      {results.total
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <span className="total-unit-inline">kg CO₂e</span>
                    </div>
                    <div className="total-annual">
                      {(results.total * 12)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      kg CO₂e / year
                    </div>

                    <div className="emissions-mini-breakdown mt-3">
                      <div className="mini-category">
                        <div className="mini-category-header">
                          <span className="mini-category-icon">⚡</span>
                          <span className="mini-category-name">Energy</span>
                          <span className="mini-category-percent">
                            {results.total > 0
                              ? (
                                  (results.breakdown.energy / results.total) *
                                  100
                                ).toFixed(1)
                              : "0.0"}
                            %
                          </span>
                        </div>
                        <div className="mini-bar-container">
                          <div
                            className="mini-bar mini-bar-energy"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.breakdown.energy / results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mini-category">
                        <div className="mini-category-header">
                          <span className="mini-category-icon">🚗</span>
                          <span className="mini-category-name">Transport</span>
                          <span className="mini-category-percent">
                            {results.total > 0
                              ? (
                                  (results.breakdown.transport /
                                    results.total) *
                                  100
                                ).toFixed(1)
                              : "0.0"}
                            %
                          </span>
                        </div>
                        <div className="mini-bar-container">
                          <div
                            className="mini-bar mini-bar-transport"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.breakdown.transport /
                                      results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mini-category">
                        <div className="mini-category-header">
                          <span className="mini-category-icon">♻️</span>
                          <span className="mini-category-name">Waste</span>
                          <span className="mini-category-percent">
                            {results.total > 0
                              ? (
                                  (results.breakdown.waste / results.total) *
                                  100
                                ).toFixed(1)
                              : "0.0"}
                            %
                          </span>
                        </div>
                        <div className="mini-bar-container">
                          <div
                            className="mini-bar mini-bar-waste"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.breakdown.waste / results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scope-breakdown mt-4">
                    <h5 className="breakdown-title mb-3">
                      GHG Protocol Scopes
                    </h5>

                    <div className="scopes-unified">
                      {/* Scope 1 */}
                      <div className="scope-bar-item">
                        <div className="scope-bar-header">
                          <div className="scope-bar-left">
                            <span className="scope-badge scope-1">Scope 1</span>
                            <span className="scope-bar-description">
                              Direct Emissions
                            </span>
                          </div>
                          <div className="scope-bar-right">
                            <span className="scope-bar-value">
                              {results.scopes.scope1.toFixed(0)}
                            </span>
                            <span className="scope-bar-unit">kg CO₂e</span>
                            <span className="scope-bar-percent">
                              {results.total > 0
                                ? (
                                    (results.scopes.scope1 / results.total) *
                                    100
                                  ).toFixed(1)
                                : "0.0"}
                              %
                            </span>
                          </div>
                        </div>
                        <div className="scope-bar-container">
                          <div
                            className="scope-bar scope-bar-1"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.scopes.scope1 / results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          >
                            <div className="scope-bar-shine"></div>
                          </div>
                        </div>
                        {results.scopes.scope1 > 0 && (
                          <div className="scope-details-inline">
                            {results.scopeDetails.scope1.naturalGas > 0 && (
                              <span className="detail-badge">
                                Natural Gas:{" "}
                                {results.scopeDetails.scope1.naturalGas.toFixed(
                                  0
                                )}{" "}
                                kg
                              </span>
                            )}
                            {results.scopeDetails.scope1.heating > 0 && (
                              <span className="detail-badge">
                                Heating Oil:{" "}
                                {results.scopeDetails.scope1.heating.toFixed(0)}{" "}
                                kg
                              </span>
                            )}
                            {results.scopeDetails.scope1.ownedVehicles > 0 && (
                              <span className="detail-badge">
                                Owned Vehicles:{" "}
                                {results.scopeDetails.scope1.ownedVehicles.toFixed(
                                  0
                                )}{" "}
                                kg
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Scope 2 */}
                      <div className="scope-bar-item">
                        <div className="scope-bar-header">
                          <div className="scope-bar-left">
                            <span className="scope-badge scope-2">Scope 2</span>
                            <span className="scope-bar-description">
                              Purchased Energy
                            </span>
                          </div>
                          <div className="scope-bar-right">
                            <span className="scope-bar-value">
                              {results.scopes.scope2.toFixed(0)}
                            </span>
                            <span className="scope-bar-unit">kg CO₂e</span>
                            <span className="scope-bar-percent">
                              {results.total > 0
                                ? (
                                    (results.scopes.scope2 / results.total) *
                                    100
                                  ).toFixed(1)
                                : "0.0"}
                              %
                            </span>
                          </div>
                        </div>
                        <div className="scope-bar-container">
                          <div
                            className="scope-bar scope-bar-2"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.scopes.scope2 / results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          >
                            <div className="scope-bar-shine"></div>
                          </div>
                        </div>
                        {results.scopes.scope2 > 0 && (
                          <div className="scope-details-inline">
                            {results.scopeDetails.scope2.electricity > 0 && (
                              <span className="detail-badge">
                                Grid Electricity:{" "}
                                {results.scopeDetails.scope2.electricity.toFixed(
                                  0
                                )}{" "}
                                kg
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Scope 3 */}
                      <div className="scope-bar-item">
                        <div className="scope-bar-header">
                          <div className="scope-bar-left">
                            <span className="scope-badge scope-3">Scope 3</span>
                            <span className="scope-bar-description">
                              Value Chain
                            </span>
                          </div>
                          <div className="scope-bar-right">
                            <span className="scope-bar-value">
                              {results.scopes.scope3.toFixed(0)}
                            </span>
                            <span className="scope-bar-unit">kg CO₂e</span>
                            <span className="scope-bar-percent">
                              {results.total > 0
                                ? (
                                    (results.scopes.scope3 / results.total) *
                                    100
                                  ).toFixed(1)
                                : "0.0"}
                              %
                            </span>
                          </div>
                        </div>
                        <div className="scope-bar-container">
                          <div
                            className="scope-bar scope-bar-3"
                            style={{
                              width: `${
                                results.total > 0
                                  ? (results.scopes.scope3 / results.total) *
                                    100
                                  : 0
                              }%`,
                            }}
                          >
                            <div className="scope-bar-shine"></div>
                          </div>
                        </div>
                        {results.scopes.scope3 > 0 && (
                          <div className="scope-details-inline">
                            {results.scopeDetails.scope3.publicTransport >
                              0 && (
                              <span className="detail-badge">
                                Public Transport:{" "}
                                {results.scopeDetails.scope3.publicTransport.toFixed(
                                  0
                                )}{" "}
                                kg
                              </span>
                            )}
                            {results.scopeDetails.scope3.flights > 0 && (
                              <span className="detail-badge">
                                Air Travel:{" "}
                                {results.scopeDetails.scope3.flights.toFixed(0)}{" "}
                                kg
                              </span>
                            )}
                            {results.scopeDetails.scope3.electricVehicles >
                              0 && (
                              <span className="detail-badge">
                                Electric Vehicles:{" "}
                                {results.scopeDetails.scope3.electricVehicles.toFixed(
                                  0
                                )}{" "}
                                kg
                              </span>
                            )}
                            {results.scopeDetails.scope3.waste > 0 && (
                              <span className="detail-badge">
                                Waste:{" "}
                                {results.scopeDetails.scope3.waste.toFixed(0)}{" "}
                                kg
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="info-card">
                <Card.Body>
                  <h5 className="mb-3">📊 Data Source</h5>
                  <p className="small mb-3">
                    Calculations based on UK Government GHG Conversion Factors
                    2025, providing the most accurate and up-to-date emission
                    factors.
                  </p>
                  <a
                    href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary w-100"
                  >
                    View Official Factors →
                  </a>
                </Card.Body>
              </Card>

              <Card className="mt-3 info-card scope-info">
                <Card.Body>
                  <h5 className="mb-3">📖 Understanding GHG Scopes</h5>
                  <div className="scope-explanation">
                    <div className="mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="scope-badge scope-1">1</span>
                        <div>
                          <strong className="d-block mb-1">
                            Direct Emissions
                          </strong>
                          <p className="small mb-0">
                            From sources you own or control: company vehicles,
                            fuel combustion in owned facilities
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <span className="scope-badge scope-2">2</span>
                        <div>
                          <strong className="d-block mb-1">
                            Purchased Energy
                          </strong>
                          <p className="small mb-0">
                            Indirect emissions from electricity, steam,
                            heating/cooling you purchase
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-start gap-2">
                        <span className="scope-badge scope-3">3</span>
                        <div>
                          <strong className="d-block mb-1">Value Chain</strong>
                          <p className="small mb-0">
                            All other indirect emissions: business travel,
                            employee commuting, waste, purchased goods
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-top">
                    <p className="small text-muted mb-0">
                      Based on the{" "}
                      <a
                        href="https://ghgprotocol.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GHG Protocol
                      </a>{" "}
                      Corporate Standard
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarbonCalculator;
