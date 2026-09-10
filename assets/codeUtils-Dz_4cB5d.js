import"./rolldown-runtime-aKtaBQYM.js";import{n as e}from"./jsx-runtime-2Zwg-L3c.js";e();var t=[{id:`custom`,title:`0. Custom Sandbox / Free Coding`,difficulty:`Sandbox`,description:`Write and test your own custom code in any supported programming language. Use the Custom Input (stdin) tab below to pass input arguments to your program.`,input:``,templates:{python:`# Write your own Python code here
print("Hello World!")`,java:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,cpp:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`,sql:`-- Query against employees / departments tables
SELECT * FROM employees;`}}],n=e=>e?String(e).toLowerCase().trim().replace(/[^a-z0-9\s-]/g,``).replace(/[\s_]+/g,`-`).replace(/^-+|-+$/g,``):``,r=(e,t)=>{if(!e)return``;let n;n=t===`python`?/("""[\s\S]*?"""|'''[\s\S]*?'''|#.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|[=+\-*/%<>&|!~?:^]+|[;.,(){}\[\]]|\s+)/g:t===`java`||t===`cpp`?/(\/\*[\s\S]*?\*\/|\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?(?:[fFlL]|u|U)?\b|\b[A-Za-z_]\w*\b|[=+\-*/%<>&|!~?:^]+|[;.,(){}\[\]]|\s+)/g:t===`sql`||t===`mysql`||t===`postgres`?/(\/\*[\s\S]*?\*\/|--.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|[=+\-*/%<>&|!~?:^]+|[;.,(){}\[\]]|\s+)/g:/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|[=+\-*/%<>&|!~?:^]+|[;.,(){}\[\]]|\s+)/g;let r=new Set(`def.class.import.from.as.return.if.elif.else.for.in.while.try.except.finally.raise.pass.break.continue.and.or.not.is.lambda.with.yield.global.nonlocal.assert.del.async.await.match.case`.split(`.`)),i=new Set(`None.True.False.len.range.list.dict.set.tuple.str.int.float.bool.type.sum.min.max.abs.enumerate.zip.map.filter.sorted.reversed.open.input.print.super.isinstance.issubclass.id.getattr.setattr.hasattr.any.all`.split(`.`)),a=new Set(`public.private.protected.class.interface.extends.implements.import.package.return.if.else.for.while.do.static.final.new.this.super.override.include.using.namespace.const.virtual.auto.synchronized.volatile.transient.native.abstract.strictfp.try.catch.finally.throw.throws.switch.case.default.break.continue.instanceof.assert.enum.struct.union.typedef.typename.template.constexpr.noexcept.explicit.inline.operator.sizeof.record`.split(`.`)),o=new Set([`void`,`int`,`double`,`float`,`char`,`boolean`,`long`,`byte`,`short`,`true`,`false`,`null`,`bool`,`size_t`,`uint32_t`,`int64_t`,`nullptr`]),s=new Set(`String.Object.Thread.Runnable.System.Math.Integer.Long.Double.Float.Boolean.Byte.Short.Character.StringBuilder.StringBuffer.Exception.RuntimeException.Throwable.InterruptedException.NullPointerException.IllegalArgumentException.IndexOutOfBoundsException.List.ArrayList.LinkedList.Map.HashMap.TreeMap.Set.HashSet.TreeSet.Queue.ArrayDeque.PriorityQueue.Stack.Collections.Arrays.Scanner.BufferedReader.InputStreamReader.PrintWriter.File.Path.Paths.Stream.Optional.vector.unordered_map.map.set.string.pair.queue.stack.std.cin.cout.endl`.split(`.`)),c=new Set(`SELECT.FROM.WHERE.JOIN.INNER.LEFT.RIGHT.FULL.OUTER.CROSS.ON.GROUP.BY.HAVING.ORDER.LIMIT.OFFSET.AS.AND.OR.NOT.IN.EXISTS.LIKE.ILIKE.IS.NULL.BETWEEN.INSERT.INTO.VALUES.UPDATE.SET.DELETE.CREATE.ALTER.DROP.TABLE.DATABASE.INDEX.VIEW.PRIMARY.KEY.FOREIGN.REFERENCES.CONSTRAINT.UNION.ALL.CASE.WHEN.THEN.ELSE.END.CAST.COALESCE.SUM.MAX.MIN.AVG.COUNT.DISTINCT.ROW_NUMBER.OVER.PARTITION`.split(`.`)),l=e.match(n)||[e];return l.map((e,n)=>{let u=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);if(e.startsWith(`#`)||e.startsWith(`//`)||e.startsWith(`/*`)||e.startsWith(`--`))return`<span class="code-token-comment">${u}</span>`;if(e.startsWith(`"`)||e.startsWith(`'`)||e.startsWith(`"""`)||e.startsWith(`'''`))return`<span class="code-token-string">${u}</span>`;if(e.startsWith(`@`))return`<span class="code-token-annotation">${u}</span>`;if(/^\d+(?:\.\d+)?(?:[fFlL]|u|U)?$/.test(e))return`<span class="code-token-number">${u}</span>`;let d=!1;for(let e=n+1;e<l.length;e++)if(l[e].trim()!==``){l[e]===`(`&&(d=!0);break}if(t===`python`){if(r.has(e))return`<span class="code-token-keyword">${u}</span>`;if(i.has(e))return`<span class="code-token-builtin">${u}</span>`;if(/^[A-Z][a-zA-Z0-9_]*$/.test(e))return`<span class="code-token-type">${u}</span>`;if(d&&/^[a-zA-Z_]\w*$/.test(e))return`<span class="code-token-function">${u}</span>`}if(t===`java`||t===`cpp`){if(a.has(e))return`<span class="code-token-keyword">${u}</span>`;if(o.has(e))return`<span class="code-token-builtin">${u}</span>`;if(s.has(e)||/^[A-Z][a-zA-Z0-9_]*$/.test(e)&&!a.has(e))return`<span class="code-token-type">${u}</span>`;if(d&&/^[a-zA-Z_]\w*$/.test(e))return`<span class="code-token-function">${u}</span>`}if(t===`sql`||t===`mysql`||t===`postgres`){if(c.has(e.toUpperCase()))return`<span class="code-token-keyword">${u}</span>`;if(d&&/^[a-zA-Z_]\w*$/.test(e))return`<span class="code-token-function">${u}</span>`}return/^[=+\-*/%<>&|!~?:^]+$/.test(e)?`<span class="code-token-operator">${u}</span>`:/^[;.,(){}\[\]]+$/.test(e)?`<span class="code-token-punctuation">${u}</span>`:/^[a-zA-Z_]\w*$/.test(e)?`<span class="code-token-variable">${u}</span>`:u}).join(``)},i=e=>e?e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`):``,a=e=>{if(!e)return``;let t=i(e),n=`# -- HIDE DRIVER CODE START --`,r=`# -- HIDE DRIVER CODE END --`,a=`// -- HIDE DRIVER CODE START --`,o=`// -- HIDE DRIVER CODE END --`;if(t.includes(n)&&t.includes(r)){let e=t.split(n),i=e[1].split(r);return(e[0]+(i[1]||``)).trim()}if(t.includes(a)&&t.includes(o)){let e=t.split(a),n=e[1].split(o);return(e[0]+(n[1]||``)).trim()}return t},o=e=>{if(!e)return null;let t=`# -- HIDE DRIVER CODE START --`,n=`# -- HIDE DRIVER CODE END --`,r=`// -- HIDE DRIVER CODE START --`,i=`// -- HIDE DRIVER CODE END --`;return e.includes(t)&&e.includes(n)?{startMarker:t,endMarker:n,hiddenContent:e.split(t)[1].split(n)[0]}:e.includes(r)&&e.includes(i)?{startMarker:r,endMarker:i,hiddenContent:e.split(r)[1].split(i)[0]}:null},s=(e,t,n)=>{if(!e||!e.trim())return e;let r=o(t||``);if(r){let{startMarker:i,endMarker:a,hiddenContent:o}=r;if(n===`java`||t&&t.includes(`public class Main`)){if(e.includes(`public static void main(`))return e;if(e.includes(`public class Main`)){let t=e.lastIndexOf(`}`);if(t!==-1)return e.substring(0,t)+`

  `+i+o+a+`
`+e.substring(t)}else return`import java.util.*;
import java.io.*;

public class Main {
  `+e+`

  `+i+o+a+`
}`}return e+`

`+i+o+a}if(n===`java`){if(e.includes(`public static void main(`))return e;let t=e.match(/public\s+static\s+[\w\[\]<>]+\s+(\w+)\s*\(/)||e.match(/static\s+[\w\[\]<>]+\s+(\w+)\s*\(/)||e.match(/[\w\[\]<>]+\s+(\w+)\s*\(/),n=t?t[1]:`solution`,r=e.includes(`List<String>`)||e.includes(`String[]`),i=e.includes(`List<Integer>`)||e.includes(`int[]`),a=r?`
    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line = reader.readLine();
        if (line == null) return;
        String clean = line.replace("[", "").replace("]", "").replace("\"", "").trim();
        String[] tokens = clean.isEmpty() ? new String[0] : clean.split(",");
        List<String> words = new ArrayList<>();
        for (String t : tokens) if (!t.trim().isEmpty()) words.add(t.trim());
        Object res = ${n}(words);
        System.out.println(res);
    }`:i?`
    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line = reader.readLine();
        if (line == null) return;
        String clean = line.replace("[", "").replace("]", "").trim();
        String[] tokens = clean.isEmpty() ? new String[0] : clean.split(",");
        List<Integer> list = new ArrayList<>();
        for (String t : tokens) if (!t.trim().isEmpty()) list.add(Integer.parseInt(t.trim()));
        Object res = ${n}(list);
        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res));
        else System.out.println(res);
    }`:`
    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line0 = reader.readLine();
        if (line0 == null) return;
        String line1 = reader.readLine();
        
        String clean0 = line0.replace("[", "").replace("]", "").trim();
        String[] tokens0 = clean0.isEmpty() ? new String[0] : clean0.split(",");
        int[] nums = new int[tokens0.length];
        for (int i = 0; i < tokens0.length; i++) {
            try { nums[i] = Integer.parseInt(tokens0[i].trim()); } catch (Exception e) {}
        }
        
        if (line1 != null && !line1.trim().isEmpty()) {
            try {
                int target = Integer.parseInt(line1.trim());
                Object res = ${n}(nums, target);
                if (res instanceof int[]) System.out.println(Arrays.toString((int[])res));
                else System.out.println(res);
                return;
            } catch (Exception e) {}
        }
        
        Object res = ${n}(nums);
        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res));
        else System.out.println(res);
    }`;if(e.includes(`public class Main`)){let t=e.lastIndexOf(`}`);if(t!==-1)return e.substring(0,t)+`

  `+a+`
`+e.substring(t)}return`import java.util.*;
import java.io.*;

public class Main {
  `+e+`

  `+a+`
}`}if(n===`python`){if(!t||e.includes(`if __name__ ==`)||e.includes(`sys.stdin`)||e.includes(`main(`)||e.includes(`print(`))return e;let n=e.match(/def\s+(\w+)\s*\(/);if(n){let t=n[1];return t===`main`?e:e+`\n\nimport sys, json\ntry:\n    raw_input = sys.stdin.read()\n    lines = raw_input.split('\\n') if raw_input else []\n    if lines and lines[0].strip():\n        try:\n            arg1 = json.loads(lines[0].strip())\n            if len(lines) > 1 and lines[1].strip():\n                try:\n                    arg2 = int(lines[1].strip())\n                    print(${t}(arg1, arg2))\n                except Exception:\n                    print(${t}(arg1))\n            else:\n                print(${t}(arg1))\n        except Exception:\n            print(${t}(lines[0].strip()))\nexcept Exception:\n    pass`}}return e},c=(e,t)=>{if(!t||!t.trim())return t;let n=e===`cpp`?`cpp`:e===`java`?`java`:e===`mysql`||e===`postgres`?`sql`:`python`;return n===`java`&&!t.includes(`class Main`)?`import java.util.*;\nimport java.io.*;\n\npublic class Main {\n${t.split(`
`).map(e=>`    `+e).join(`
`)}\n}`:n===`cpp`&&!t.includes(`main()`)&&!t.includes(`#include`)?`#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n${t}`:t},l=e=>{if(!e)return[];let t=e.description||``,n=[],r=/<strong>Input:<\/strong>\s*([\s\S]*?)<strong>Output:<\/strong>\s*([\s\S]*?)(?=<strong>Explanation:<\/strong>|<\/pre>|<h4|$)/gi,a,o=1;for(;(a=r.exec(t))!==null;){let e=a[1].replace(/<[^>]+>/g,``).trim(),t=a[2].replace(/<[^>]+>/g,``).trim();e=i(e),t=i(t),(e||t)&&(n.push({id:o,label:`Case ${o}`,input:e,expectedOutput:t}),o++)}if(n.length===0){let r=t.match(/Sample Input<\/h4>\s*<pre[^>]*>([\s\S]*?)<\/pre>/i),a=t.match(/Expected Output<\/h4>\s*<pre[^>]*>([\s\S]*?)<\/pre>/i),o=r?i(r[1].replace(/<[^>]+>/g,``).trim()):(e.input||``).trim(),s=a?i(a[1].replace(/<[^>]+>/g,``).trim()):``;(o||s)&&n.push({id:1,label:`Case 1`,input:o,expectedOutput:s})}return n},u=(e,t)=>{if(!t)return null;let n=(e||``).trim(),r=(t||``).trim();if(n===r||n!==``&&r!==``&&!isNaN(n)&&!isNaN(r)&&Number(n)===Number(r))return!0;let i=e=>(e||``).replace(/[\r\n\s]+/g,``).replace(/,/g,`,`).toLowerCase();if(i(n)===i(r))return!0;try{let e=JSON.parse(n),t=JSON.parse(r);return JSON.stringify(e)===JSON.stringify(t)}catch{}return!1},d={python:`# Write your custom Python 3 code here
def main():
    print("Hello, Virtual Gyans Playground!")

if __name__ == "__main__":
    main()`,java:`import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Virtual Gyans Playground!");
    }
}`,cpp:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Virtual Gyans Playground!" << endl;
    return 0;
}`,mysql:`-- Write your custom MySQL query here
SELECT 'Hello, Virtual Gyans Playground!' AS message;`,postgres:`-- Write your custom PostgreSQL query here
SELECT 'Hello, Virtual Gyans Playground!' AS message;`,sql:`-- Write your custom SQL query here
SELECT 'Hello, Virtual Gyans Playground!' AS message;`},f=new Map,p=e=>{if(!e)return null;if(f.has(e))return f.get(e);try{let t=sessionStorage.getItem(`vgyans_q_cache_${e}`);if(t){let n=JSON.parse(t);return f.set(e,n),n}}catch{}return null},m=(e,t)=>{if(!(!e||!t)){f.set(e,t);try{sessionStorage.setItem(`vgyans_q_cache_${e}`,JSON.stringify(t))}catch{}}};export{p as a,l as c,n as d,i as f,c as i,s as l,t as n,a as o,u as r,r as s,d as t,m as u};