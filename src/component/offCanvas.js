import { Card, Offcanvas } from "react-bootstrap";

const styles = {
  cardImage: {
    objectFit: 'cover',
    height: '100%'
  },
  offCanvas: {
    'background-color': '#c48d3f'
  },
  offCanvasTitle: {
    'font-family': 'Courier New, Courier, monospace'
  },
  card: {
    'margin-bottom': '15px',
    'background-color': '#fff563'
  },
  cardTitle: {
    'font-family': 'Courier New, Courier, monospace'
  },
  cardSubtitle: {
    'font-family': 'Courier New, Courier, monospace'
  },
  cardLink: {
    'font-family': 'Courier New, Courier, monospace'
  }
}

function MyOffCanvas({ toggleShow, data }) {
  return (
    <>
      <Offcanvas show={true} onHide={toggleShow} style={styles.offCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={styles.offCanvasTitle}>{data.city}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.art.map(({ name, realName, artist, imgSrc, wikiUrl, location }) => (
            <Card style={styles.card} text='dark'>
              <Card.Body>
                <Card.Img variant="top" src={imgSrc} style={styles.cardImage} />
                <Card.Title style={styles.cardTitle}>{name}</Card.Title>
                <Card.Subtitle style={styles.cardSubtitle}>Real Name of the art: {realName}</Card.Subtitle>
                <Card.Subtitle style={styles.cardSubtitle}>Artist: {artist}</Card.Subtitle>
                <Card.Subtitle style={styles.cardSubtitle}>Location: {location}</Card.Subtitle>
                <Card.Link style={styles.cardLink} href={wikiUrl}>Animal Crossing wiki</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyOffCanvas;
