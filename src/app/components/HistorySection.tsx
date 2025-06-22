import Image from 'next/image'
import styles from './HistorySection.module.css'

export default function HistorySection() {
  return (
    <section className={styles.history}>
      <h2>HISTORY OF CPP</h2>
      <div className={styles.content}>
        {/* Text wrapper: paragraphs always stack */}
        <div className={styles.text}>
          <p>
            The CPP was launched in 2005 at the 2nd Annual UNAVSA Conference held at DePaul University in Chicago, Illinois. Before it was known as CPP, it began as a local charity project under the Illinois Vietnamese Student Union (IVSU).
          </p>
          <p>
            CPP was originally created to assist North American Vietnamese non-profit organizations to better achieve their mission through collective and collaborative partnership with UNAVSA and its affiliate regions.
          </p>
          <p>
            Since the start, CPP has grown to include the participation of VSAs throughout the United States and Canada, working together to support a variety of non-profit organizations through fundraising and community outreach. By combining resources together, these groups have been able to make a greater impact on the world.
          </p>
        </div>

        {/* Image stays to the right on wider screens */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/HistoryImage.png"
            alt="History of CPP"
            width={400}
            height={250}
          />
        </div>
      </div>
    </section>
  )
}



