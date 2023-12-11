import style from '@/styles/loading.module.css';

export default function loading() {
  return (
    <>
    <div className={style.loading_section}>
        <div className={style.loading}></div>
    </div>
    </>
  )
}
