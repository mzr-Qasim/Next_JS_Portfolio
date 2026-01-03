import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.scss";
import styles from './layout.module.scss';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Layout}>{children}</div>
      </body>
    </html>
  );
}
