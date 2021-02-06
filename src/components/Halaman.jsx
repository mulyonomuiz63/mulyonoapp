import { useState } from "react";


const Halaman = () => {
  return (
    <div>
      <div>
        <fieldset>
          <legend>Biodata</legend>
          <table>
            <tr>
              <td width="120">Nama :</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>NIM :</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Tanggal Lahir :</td>
              <td>
                <select name="" id="">
                  <option value="">01</option>
                </select>{" "}
                <select name="" id="">
                  <option value="">Januari</option>
                </select>{" "}
                <select name="" id="">
                  <option value="">2021</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Alamat :</td>
              <td>
                <textarea name="" id="" cols="20" rows="5"></textarea>
              </td>
            </tr>
            <tr>
              <td>Jenis Kelamin :</td>
              <td>
                <input name="jk" type="radio" /> Laki-Laki <input name="jk" type="radio" />{" "}
                Perempuan
              </td>
            </tr>
          </table>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>User Account</legend>
          <table>
            <tr>
              <td width="120">Useername</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Ulangi Password</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Resolusi Tahun Ini</legend>
          <table>
            <tr>
              <td width="120"></td>
              <td>
                <input type="checkbox" name="" id=""/> Menguasai HTML
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="" id=""/>Paham CSS
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="" id=""/>Mastering PHP
              </td>
            </tr>
          </table>
        </fieldset>
      </div>
      <button type="submit">Kirim Data</button>
    </div>
  );
};

export default Halaman;
